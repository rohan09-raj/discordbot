import { DISCORD_BASE_URL } from "./constants";

export default async function modifyGuildMembers(
  discordId: number,
  rdsData: { username: string; roles: Array<string> },
  discordToken: string,
  guildId: number
) {
  console.log(discordToken);
  const changeNicknameUrl = `${DISCORD_BASE_URL}/guilds/${guildId}/members/${discordId}`;
  const data = { nick: rdsData.username };
  const nameChangeResponse = await fetch(changeNicknameUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bot ${discordToken}`,
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      console.log(response.status, response.statusText);
      throw new Error(response.statusText);
    } else {
      return response.json();
    }
  });

  return nameChangeResponse;
}
