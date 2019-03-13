import WidgetModel from './WidgetModel'

class SourceModel extends WidgetModel {
    constructor(options) {
        super()
        this.id = options.source
        this.sourceLayerList = {}
        this.layers = [];
    }

    addLayer(layer, sourceLayer) {
            if (sourceLayer) {
                if (!this.sourceLayerList[sourceLayer]) {
                    this.sourceLayerList[sourceLayer] = []
                }
                this.sourceLayerList[sourceLayer].push(layer);
            } else {
                this.sourceLayerList = undefined;
            }
            this.layers.push(layer)

            if([layer.visibility,this.visibility].includes('visible')){
                this.visibility = 'visible'
            }else{
                this.visibility = "none"
            }
    }
}

export default SourceModel;