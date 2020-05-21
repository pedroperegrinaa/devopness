/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ArgumentNullException } from "../../../common/Exceptions";
import { Service } from '../../generated/models';
import { ServiceCreate } from '../../generated/models';

/**
 * ProjectsServicesApiService - Auto-generated
 */
export class ProjectsServicesApiService extends ApiBaseService {
    /**
     * 
     * @summary Add a service to a project and triggers its setup in each linked server
     * @param {number} projectId The service\&#39;s unique id
     * @param {ServiceCreate} serviceCreate A JSON object containing service data
     */
    public async addServiceToProject(projectId: number, serviceCreate: ServiceCreate): Promise<Service> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addServiceToProject');
        }
        if (serviceCreate === null || serviceCreate === undefined) {
            throw new ArgumentNullException('serviceCreate', 'addServiceToProject');
        }
        const response = await this.post <Service, ServiceCreate>(`/projects/{project_id}/services`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), serviceCreate);
        return response.data;
    }

    /**
     * 
     * @summary List all services in a project
     * @param {number} projectId The service unique Id
     */
    public async listProjectServices(projectId: number): Promise<Array<Service>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectServices');
        }
        const response = await this.get <Array<Service>>(`/projects/{project_id}/services`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return response.data;
    }
}
