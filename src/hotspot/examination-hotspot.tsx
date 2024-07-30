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
                            FNPCC employees are trained in providing culturally safe services to clients.
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </>
    );
}

export {ExamineImg2Hotspot}

