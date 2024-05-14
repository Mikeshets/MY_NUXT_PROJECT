export function useDataFetching<T>(url: string) {
  const fetchData = async (method: string, body?: any) => {
    debugger;
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };

  const { data, error } = useFetch<T>(url);

  const post = async (body: any) => fetchData("POST", body);
  const put = async (body: any) => fetchData("PUT", body);
  const remove = async () => fetchData("DELETE");

  return { data, error, post, put, remove };
}
