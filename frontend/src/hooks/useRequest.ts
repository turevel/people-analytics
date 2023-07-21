import { AxiosResponse } from 'axios';

function useRequest() {
	const request = async (callback: () => Promise<AxiosResponse>) => {
		try {
			return (await callback()).data;
		} catch (_) {
			return null;
		}
	};

	return request;
}

export default useRequest;
