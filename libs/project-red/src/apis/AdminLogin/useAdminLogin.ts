import { MutationStatus, useMutation } from '@tanstack/react-query';

import { ADMIN_LOGIN_URL } from '../../constants/apiConstants';
import {
  AdminLoginParams,
  AdminLoginResponse,
  AdminLoginResult,
} from '../../schema';
import { api } from '../../utils/api';

interface TriggerArgs {
  reqObj: AdminLoginParams;
  onSuccess?: (data: AdminLoginResult) => void;
  onFailure?: (errorMessage: string) => void;
}

interface ReturnType {
  triggerAPI: (args: TriggerArgs) => void;
  status: MutationStatus;
  isPending: boolean;
}

const adminLogin = async (
  reqObj: AdminLoginParams
): Promise<AdminLoginResponse> => {
  const response = await api.post(ADMIN_LOGIN_URL, reqObj, {
    withCredentials: true,
  });
  return response.data;
};

const useAdminLogin = (): ReturnType => {
  const { mutate, status, isPending } = useMutation({
    mutationFn: adminLogin,
  });

  const triggerAPI = (args: TriggerArgs): void => {
    mutate(args.reqObj, {
      onSettled(data) {
        if (!data) return;

        switch (data._typename) {
          case 'AdminLoginResult': {
            args.onSuccess?.(data);
            break;
          }
          default: {
            const errorMessage = data._typename.replace(/([A-Z])/g, ' $1');
            args.onFailure?.(errorMessage);
          }
        }
      },
    });
  };

  return { triggerAPI, status, isPending };
};

export default useAdminLogin;
