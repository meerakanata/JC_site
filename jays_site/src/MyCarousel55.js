
//previously code in ComponentDidUpdate ()
let currentObj = this.props.currentObj

        // eslint-disable-next-line
        if(this.props.slideId == undefined){
            console.log("slideId is undefined")
        }
        else {
            const id = Number(this.props.slideId);
            if(currentObj.displaySlide.frameNum !== id){
                if(id === 3 || id === 2){
                    const prevSlideIndex = id-1;
                    const prevSlide = currentObj.carousel[prevSlideIndex].slide;
                    let prevSlideObj = {
                        slide: prevSlide,
                        frameNum: id,
                    }
                    // this.props.prevSlide(prevSlideObj);
                }
                else if(id === 1){
                    const prevSlideIndex = 0;
                    const prevSlide = currentObj.carousel[prevSlideIndex].slide;
                    let prevSlideObj = {
                        slide: prevSlide,
                        frameNum: id,
                    }
                    // this.props.prevSlide(prevSlideObj);
                }
            }
        }