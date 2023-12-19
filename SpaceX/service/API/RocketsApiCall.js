import { rocketApiCall } from '../serviceIndex';

export const rocketsList = async () => {
  try {
    const res = await rocketApiCall.get('rockets');
      if (res?.status === 200 || res?.status === 201) {
            return res.data;
          }
          return {}
  } catch (e) {
    console.log(e, 'error');
    return null;
  }
};
