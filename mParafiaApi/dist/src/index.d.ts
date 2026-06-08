import 'dotenv/config';
import type { Request } from 'express';
interface AdminPayload {
    adminId: number;
    isSuperAdmin: boolean;
    allowedGroupIds: number[];
}
export interface AuthRequest extends Request {
    admin?: AdminPayload;
}
export {};
//# sourceMappingURL=index.d.ts.map