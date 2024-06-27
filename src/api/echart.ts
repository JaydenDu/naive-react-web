import service from '@/utils/service';

interface params { }

export function getNetWorkHashRateData(params:params) {
  return service({
    url: '/api/data/getNetWorkHashRate',
    method: 'get',
    params,
  });
}

export function getTransactionChartsData(params:params) {
  return service({
    url: '/api/data/getTransactionChartsData',
    method: 'get',
    params,
  });
}

export function getBlockTransactionCountChartsData(params:params) {
  return service({
    url: '/api/data/getBlockTransactionCountChartsData',
    method: 'get',
    params,
  });
}
