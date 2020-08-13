export default class SearchState {
  constructor(block) {
    this._block = block;
  }

  setActive() {
    this._block.style.display = 'block';
  }

  setInactive() {
    this._block.style.display = 'none';
  }
}
