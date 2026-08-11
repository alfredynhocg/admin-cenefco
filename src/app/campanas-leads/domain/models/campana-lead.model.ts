export type EstadoCampanaLead = 'activa' | 'cerrada';

export interface Lead {
  id: number;
  campana_lead_id: number;
  nombre: string;
  celular: string;
  correo: string | null;
  profesion: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface CampanaLead {
  id: number;
  nombre: string;
  descripcion: string | null;
  estado: EstadoCampanaLead;
  fecha_inicio: string | null;
  fecha_fin: string | null;
  total_leads: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface CampanaLeadListResponse {
  data: CampanaLead[];
  total: number;
}

export interface LeadListResponse {
  data: Lead[];
  total: number;
}

export interface CreateCampanaLeadPayload {
  nombre: string;
  descripcion?: string | null;
  estado?: EstadoCampanaLead;
  fecha_inicio?: string | null;
  fecha_fin?: string | null;
}

export type UpdateCampanaLeadPayload = Partial<CreateCampanaLeadPayload>;

export interface CreateLeadPayload {
  nombre: string;
  celular: string;
  correo?: string | null;
  profesion?: string | null;
}

export type UpdateLeadPayload = Partial<CreateLeadPayload>;

export interface ImportarLeadsResult {
  insertados: number;
  omitidos: number;
  errores: string[];
}
