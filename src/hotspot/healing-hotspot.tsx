import { Group, HoverCard, Text} from '@mantine/core'
import classes from './hotspot.module.css';

function HealingImg1Hotspot() {
    return (
        <>
            <Group className={classes.HealingImg11}>
                <HoverCard width={270} shadow='md'>
                    <HoverCard.Target>
                        <div className={classes.markers} />
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text>
                            Smudging is used to create a sacred space and open the soul before calling upon spirits and their healing powers.
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
            <Group className={classes.HealingImg12}>
                <HoverCard width={280} shadow='md'>
                    <HoverCard.Target>
                        <div className={classes.markers} />
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text>
                            Talking Circles and Groups are offered to support clients through traumatic experiences and life challenges.
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
            <Group className={classes.HealingImg13}>
                <HoverCard width={280} shadow='md'>
                    <HoverCard.Target>
                        <div className={classes.markers} />
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text>
                            Drumming and singing have healing qualities and the power of hearing the drums not only improves the mood but helps promote physica health.
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </>
    );
}

export {HealingImg1Hotspot}

