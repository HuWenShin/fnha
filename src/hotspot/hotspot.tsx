import { Paper } from '@mantine/core';
import classes from './hotspot.module.css';

function ExamineImg1() {

}

function ExamineImg2() {

    return (
        <Paper 
            className={classes.imageMap__container}
            style={{ backgroundImage: '/img/pharmacy.svg' }}
        >
            <div className={classes.markers}>
                <div className={`${classes.marker__card} ${classes.ExamineImg21}`}>
                    <p>First Nations people are able to voice their perspectives, ask questions, and be respected by health care professionals on their beliefs, behaviours and values.</p>
                </div>
            </div>
            <div className={classes.markers}>
                <div  className={`${classes.marker__card} ${classes.ExamineImg22}`}>
                    <p>FNHA provides comprehensive, mandatory and ongoing cultural safety and humility training for FNHA employees
                    and embed cultural safety and humility into FNHA’s processes, policies, resources, initiatives, and service.</p>
                </div>
            </div>
        </Paper>
    );
}

export {ExamineImg1, ExamineImg2}

