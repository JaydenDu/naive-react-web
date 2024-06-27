import service from '@/utils/service';

interface params { }

// 获取难度
export const getCurrentDifficulty = (params:params) => {
  return service({
    url: '/api/data/getDifficulty',
    method: 'get',
    params,
  });
}
// 获取内存池交易笔数
export function getCurrentMempool(params:params) {
  return service({
    url: '/api/data/getMemPoolInfo',
    method: 'get',
    params,
  });
}

// 获取coins
export function getCurrentCoins(params:params) {
  return service({
    url: '/api/data/getCoins',
    method: 'get',
    params,
  });
}

// 获取区块的list信息
export function getBlockList(params:params) {
  return service({
    url: '/api/data/getBlock',
    method: 'get',
    params,
  });
}

// 获取最新的区块高度
export function getCurrentBlockCount(params:params) {
  return service({
    url: '/api/data/getBlockCount',
    method: 'get',
    params,
  });
}

// 获取区块的交易信息
export function getTransaction(params:params) {
  return service({
    url: '/api/data/getTransaction',
    method: 'get',
    params,
  });
}

// 获取区块的交易信息
export function searchBlockInfo(params:params) {
  return service({
    url: '/api/data/search',
    method: 'get',
    params,
  });
}

// 获取区块的交易信息
export function getAddressTransactions(params:params) {
  return service({
    url: '/api/data/getAddressTransactions',
    method: 'get',
    params,
  });
}

// 获取质押数据
export function getStakingTransactionsList(params:params) {
  return service({
    url: '/api/data/getStakingTransactions',
    method: 'get',
    params,
  });
}
