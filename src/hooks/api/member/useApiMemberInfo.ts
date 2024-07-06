import { api } from "@/api"
import { useQuery } from "@tanstack/react-query";

export type MemberInfo = {
  data: {
    data: {
      email: string,
      id: number,
      name: string,
      nickname: string,
      phone: string,
      profile: string,
    }
  }
}

export const useApiMemberInfo = () => {
  const retrieveMemberInfo = async (): Promise<MemberInfo> => {
    return api.get('/user-service/api/v1/member/info');
  }

  return useQuery({
    queryKey: ['myinfo'],
    queryFn: () => retrieveMemberInfo(),
    staleTime: 60000 * 60 * 2, // 2시간
    gcTime: 60000 * 60 * 2, // 2시간
  })
}