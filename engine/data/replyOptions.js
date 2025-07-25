export const replyOptions = {
  schoolNewspaper: {
    proud: [
      "It felt good to be noticed!",
      "I just wanted Mom to smile."
    ],
    humble: [
      "Haha, it was no big deal.",
      "They liked my doodles, I guess!"
    ]
  },
  cookOffWin: {
    proud: [
      "Told you I had a secret weapon!",
      "It felt good to shine locally."
    ],
    humble: [
      "Haha, just glad I didn’t poison anyone.",
      "They liked my ube lumpia, I guess?"
    ]
  }
};
export function replyFollowUp(npc, playerReply) {
  if (playerReply.includes("Mom")) return "That’s sweet. She’ll be proud.";
  if (playerReply.includes("noticed")) return "You deserve it. Own it!";
  if (playerReply.includes("secret")) return "Remind me never to challenge you.";
  if (playerReply.includes("ube")) return "Wait—you made ube lumpia? That’s genius!";
  return "Mmm. You’re weird sometimes.";
}
