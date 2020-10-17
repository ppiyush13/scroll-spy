
/**
 * Intersection observer can return multiple entries as active.
 * ScrollWindow maintains list map of id and their active status
 * Also it returns first active on the screen, even if there are blindSpots developed
 */

export default class ScrollWindow {
    idActiveMap = {};
    currentActive = undefined;
    blindSpot = undefined;

    /**
     * destroy data structure
     */
    destroy() {
        this.idActiveMap = null;
        this.currentActive = null;
        this.blindSpot = null;
    }

    /*
        register id in underlying map, initial value will be false
    */
    add(id) {
        this.idActiveMap[id] = false;
    }

    /*
        update isActive status of relevant id
    */
    update(id, isActive) {
        this.idActiveMap[id] = isActive;
        this.checkBlindSpot(id);
    }

    /**
     * get first active id, if one is not available then blindSpotting is activated 
     */
    getActive() {
        const keyValues = Object.entries(this.idActiveMap);
        for(let idx = 0; idx < keyValues.length; idx++) {
            const [id, isActive] = keyValues[idx];
            if(isActive) {
                this.currentActive = id;
                return id;
            }
        }

        /* 
            if code has reached here, definitely a blindSpot is developed
            now proceed only if currentActive is available 
        */
        if(!this.currentActive) return;

        /* now revert the changes */
        this.idActiveMap[this.currentActive] = true;

        /* activate blindSpot */
        this.blindSpot = this.currentActive;
        return this.currentActive;
    }

    /**
     * @private
     * check if blindSpot activated 
     */
    checkBlindSpot(id) {
        /* early bailout if no active blindSpot */
        if(!this.blindSpot) return;
        
        if(id === this.blindSpot) {
            /* current active and blindSpot are same, no need to do anything */
        }
        else {
            /* otherwise, make blindSpot in-active */
            this.idActiveMap[this.blindSpot] = false;
        }

        /* de-activate blindSpot */
        this.blindSpot = undefined;
    }
}
