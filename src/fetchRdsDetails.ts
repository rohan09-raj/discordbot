import { RDS_API_BASE_URL } from "./constants";

export default async function fetchRdsDetails(rdsId: string) {
  const fetchURL = `${RDS_API_BASE_URL}/users/userid/${rdsId}`;
  const rdsData = await fetch(fetchURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        return response.json<{ user: { username: string; roles: object } }>();
      }
    })
    .then((data) => {
      const roles = Object.keys(data.user.roles);
      return { username: data.user.username, roles: roles };
    });

  return rdsData;
}
