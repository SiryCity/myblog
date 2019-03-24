export const state = () =>
  ({
    isSP: null,
    isFinished: false
  })

export const mutations = {
  //画面1個分の高さをセットする
  setStatic100vh(){
    /iPhone|iPod|iPad|Android/i.test(navigator.userAgent)
    && document.documentElement.style.setProperty(
      `${window.outerHeight}px`
    )
  },
  identifyDeviceType(state){
    state.isSP = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent)
    state.isFinished = true
  }
}

