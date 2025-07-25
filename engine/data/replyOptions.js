export const replyOptions = {
  "schoolNewspaper": {
    proud: ["It felt good to be noticed!", "I just wanted Mom to smile."],
    humble: ["Haha, it was no big deal.", "They liked my doodles, I guess!"]
  }
};
export function replyFollowUp(npc, playerReply) {
  if (playerReply.includes("Mom")) return "That’s sweet. She’ll be proud.";
  if (playerReply.includes("noticed")) return "You deserve it. Own it!";
  return "Mmm. You’re weird sometimes.";
}
