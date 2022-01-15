/**
 * Intersection observer can return multiple entries as active.
 * ScrollWindow maintains list map of id and their active status
 * Also it returns first active on the screen, even if there are blindSpots developed
 */

export class ScrollWindow {
  idActiveMap: Record<string, boolean> = {};
  currentActiveId: string | undefined = undefined;
  blindSpotId: string | undefined = undefined;

  /*
    register id in underlying map, initial value will be false
  */
  add(id: string) {
    this.idActiveMap[id] = false;
  }

  /*
    update isActive status of relevant id
  */
  update(id: string, isActive: boolean) {
    this.idActiveMap[id] = isActive;
    this.checkBlindSpot(id);
  }

  /**
   * get first active id, if one is not available then blindSpotting is activated
   */
  getActive() {
    const keyValues = Object.entries(this.idActiveMap);
    for (let idx = 0; idx < keyValues.length; idx++) {
      const [id, isActive] = keyValues[idx];
      if (isActive) {
        this.currentActiveId = id;
        return id;
      }
    }

    /* 
            if code has reached here, definitely a blindSpot is developed
            now proceed only if currentActive is available 
        */
    if (!this.currentActiveId) return;

    /* now revert the changes */
    this.idActiveMap[this.currentActiveId] = true;

    /* activate blindSpot */
    this.blindSpotId = this.currentActiveId;
    return this.currentActiveId;
  }

  /**
   * @private
   * check if blindSpot activated
   */
  private checkBlindSpot(id: string) {
    /* early bailout if no active blindSpot */
    if (!this.blindSpotId) return;

    if (id === this.blindSpotId) {
      /* current active and blindSpot are same, no need to do anything */
    } else {
      /* otherwise, make blindSpot in-active */
      this.idActiveMap[this.blindSpotId] = false;
    }

    /* de-activate blindSpot */
    this.blindSpotId = undefined;
  }

  /**
   * clean all underlying data structures
   */
  clean() {
    this.idActiveMap = {};
    this.currentActiveId = undefined;
    this.blindSpotId = undefined;
  }
}
