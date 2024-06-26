import service from '../utils/service';

interface User {}

// 根据Hash查询指定的区块
export const getCurrentDifficulty = (params:User) => {
  return service({
    url: '/api/data/getDifficulty',
    method: 'get',
    params,
  });
}
