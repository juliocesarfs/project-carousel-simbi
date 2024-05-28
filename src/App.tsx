import { useState, useEffect } from 'react';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProjectCard from './components/card/ProjectCard';

import { ProjectService } from './api/ProjectService';
import { Project } from './interfaces/iProject';



function App() {

  const projectService = new ProjectService();

  const [slidesPerView, setSlidesPerView] = useState(3);

  const [data, setData] = useState<Project[]>([]);
  const [page, setPage] = useState(0);
  const [allLoaded, setAllLoaded] = useState(false);
  const limit = 12;

  useEffect(() => {
    fetchProjects(0, limit);

    function handleResize() {
      if (window.innerWidth < 1000 && window.innerWidth > 700) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 700) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const fetchProjects = async (page: number, limit: number, loadAll: boolean = false) => {

    const data = await projectService.fetchProjects(page, limit, loadAll);

    if (loadAll) {
      setData(data!);
    } else {
      setData((prevData) => [...prevData, ...data!]);
    }
  };

  const loadAllProjects = () => {
    setAllLoaded(true);
    fetchProjects(0, limit, true);
  };

  return (
    <div className="container">
      <h1 className="title">Ver outros projetos do Proponente</h1>
      {!allLoaded ? (
        <Swiper
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <ProjectCard
                title={item.title}
                city={item.city}
                uf={item.uf}
                summary={item.summary}
                approvedValue={item.approvedValue}
                capturedValue={item.capturedValue}
              />
            </SwiperSlide>
          ))}
          <div className="all" onClick={loadAllProjects}>
            <p>+ VER TODOS</p>
          </div>
        </Swiper>
      ) : (
        <div className="all-projects">
          {data.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              city={item.city}
              uf={item.uf}
              summary={item.summary}
              approvedValue={item.approvedValue}
              capturedValue={item.capturedValue}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
