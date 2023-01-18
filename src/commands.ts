export const HELLO_COMMAND = {
  name: "hello",
  description: "Replies with hello in the channel",
};

export const VERIFY_COMMAND = {
  name: "verify",
  description: "Verify the user",
};

export const GENERATE_LINK = {
  name: "link",
  description: "Generate a link with signed token",
};

export const TASK_COMMAND = {
  name: "task",
  description: "Get task details of user",
  options: [
    {
      name: "username",
      description: "RDS username fo fetch RDS tasks",
      type: 9,
      required: true,
    },
  ],
};

export const POC_CHANGE_DISCORD_NAME = {
  name: "change_name",
  description: "Change username to rds username",
  options: [
    {
      name: "rds_id",
      description: "RDS ID of the user",
      type: 3,
      required: true,
    },
  ],
};
