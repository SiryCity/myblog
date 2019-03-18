
export const getters = {
  //スマートフォンか
  isSP: () => /iPhone|iPod|iPad|Android/i.test(navigator.userAgent)
}