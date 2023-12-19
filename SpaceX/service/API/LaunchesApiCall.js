import {launchesApiCall} from '../serviceIndex';

export const launchList = async () => {
  try {
    const res = await launchesApiCall.get('launches');
    if (res) {
      return res.data;
    }
    return {};
  } catch (e) {
    console.log(e, 'error');
    return null;
  }
};
