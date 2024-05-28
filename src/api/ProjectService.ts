import { Project } from "../interfaces/iProject";
import { formatToCurrency } from "../utils/formatToCurrency";

export class ProjectService {


    private baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:8080';

    public async fetchProjects(page: number, limit: number, loadAll: boolean = false): Promise<Project[] | undefined> {

        try {
            const url = loadAll
                ? this.baseUrl
                : `${this.baseUrl}/api/project/rouanet?page=${page}&limit=${limit}`;
            const response = await fetch(url);
            const rawData = await response.json();

            const newData: Project[] = rawData.map((item: any) => ({
                id: item.id,
                title: item.nome,
                city: item.municipio,
                uf: item.uf,
                summary: item.resumo,
                approvedValue: formatToCurrency(item.valor_aprovado),
                capturedValue: formatToCurrency(item.valor_captado),
            }));


            return newData;

        } catch (error) {
            console.error('Erro ao buscar projetos:', error);
        }
    };
}