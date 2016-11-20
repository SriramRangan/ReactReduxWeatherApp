/**
 * Created by SriramRanganathan on 11/20/16.
 */
import React, {Component} from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

const Chart = function(props) {
    return (
        <Sparklines height={60} width={120} data={props.data}>
            <SparklinesLine color={props.color}/>
        </Sparklines>
    );
}

export default Chart;
