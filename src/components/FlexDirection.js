import React from 'react'
import './flex-direction.css'


function FlexDirection({ container }) {

    /* renderizar caracteres especiais html */
    const maParser = new DOMParser().parseFromString(`${container.mainAxis}`, 'text/html').body.textContent;
    const caParser = new DOMParser().parseFromString(`${container.crossAxis}`, 'text/html').body.textContent;

    return (

        <div>
            <dl>
                <dt>flex-wrap:</dt>
                <dd>{container.flexWrap} </dd>
                <dt> flex-direction:</dt>
                <dd>{container.flexDirection} </dd>
                <dt>Main Axis: </dt>
                <dd>{maParser}</dd>
                <dt>Cross Axis: </dt>
                <dd>{caParser}</dd>
            </dl>
            <div style={container}>
                <div class="item item-1">1</div>
                <div class="item item-2">2</div>
                <div class="item item-3">3</div>
                <div class="item item-4">4</div>
                <div class="item item-5">5</div>
                <div class="item item-6">6</div>
                <div class="item item-7">7</div>
                <div class="item item-8">8</div>
                <div class="item item-9">9</div>
            </div>

        </div>

    )
}

export default FlexDirection
