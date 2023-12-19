import { historyAPiCAll } from '../serviceIndex';

export const historyList = async () => {
  try {
    const res = await historyAPiCAll.get('company');
      if (res?.status === 200 || res?.status === 201) {
            return res.data;
          }
          return {}
  } catch (e) {
    console.log(e, 'error');
    return null;
  }
};
