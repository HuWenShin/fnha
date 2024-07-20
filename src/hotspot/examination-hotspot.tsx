import { Group, HoverCard, Text} from '@mantine/core'
import classes from './hotspot.module.css';

function ExamineImg2Hotspot() {
    return (
        <>
            <Group className={classes.ExamineImg21}>
                <HoverCard width={270} shadow='md'>
                    <HoverCard.Target>
                        <div className={classes.markers} />
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text>
                            First Nations people are able to voice their perspectives, ask questions, and be respected by health care professionals on their beliefs, behaviours and values.
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
            <Group className={classes.ExamineImg22}>
                <HoverCard width={280} shadow='md'>
                    <HoverCard.Target>
                        <div className={classes.markers} />
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text>
                            FNHA provides comprehensive, mandatory and ongoing cultural safety and humility training for FNHA employees
                            and embed cultural safety and humility into FNHA’s processes, policies, resources, initiatives, and service.
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </>
    );
}

export {ExamineImg2Hotspot}

