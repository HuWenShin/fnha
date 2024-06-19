import './Map.css';
import {useState} from 'react';


function Map() {
    return (
        <>
            <img 
            className="Map" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5u0UtoDw_Y8VaQ0sgE6LU1o9nEuUyR9vTQ&s"
            alt="example land">
            </img>
        </>
    );
}

type HouseProps = {
    className: string;
    url: string;
}

function Houses({className, url}: HouseProps) {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    return (
        <div className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isVisible && <img
                className='Marker'
                src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUSExAVFhUVGBUWFhYVFRUXFxYWFRUXFhcYGBUYHSggGxslHRUVIjIhJSkrLy4uFyAzODMtNygtLisBCgoKDg0OGxAQGy0lHyYtMC0tLS0tLS0tLS0tLS0tLSsvLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgYDBQcEAQj/xABGEAACAQICBgUICAMFCQAAAAAAAQIDEQQhBQYSMUFREyJhcYEHFCMyQpGhsVJygpLB0eHwYqKzQ1NjssIVFiQ0c4OTo9L/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQIDBAUG/8QAOxEBAAIBAgMFBgQFAgYDAAAAAAECAwQREiExBUFRYYETMnGRodEiscHwFEJS4fEjsjRDcpLC4gYkM//aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8uktI0cPB1K1SMIrjJ73yS3t9iK2tFY3mWbBgyZ78GOszPkp2P1+nPLCYVyX95WvGPeoLNrva7jVtqpn3I+bu4Owa156nJt5V5z8+kfVosTpHSda+1i9hP2aSUbd0klL+YwzfNbvdLHpezsPTHv525/Tp9GtqYDEv1sXVl9adR/OZjmt5/mluVy6aPdxVj0j7IebV47qtTwrVY/iRteO+fnK3Fp7daV/7az+j5/tHFQ3YzFQ76spx90m0WjLkjvljtoNJk/wCXX0/D+Wyf+8ulYZwxzmuUqdF3/kv7mXjU5PFrW7G0c/yzHrL0YPyn46m7VaVGouOUqcvem1/KXjV274a2T/49in3bTHyn7LXofym4SraNaM6En9LrU7/Xjw7ZJGamqpPXk5mfsLU4+dNrR5dfl9t10w9eFSKnCcZRlmpRalFrmmsmbETE84ce1bVnhtG0shKoAAAAAAAAAAAAAAAAAAAFc1j1nVGTo0IqpX4r2KSe51GuPFRWb7N5gy5uHlXnLq6Hsyc0e1yzw0+s+UffpHn0U2phnOp0tebrVPpS9WPZCO6K7jUmN53tzl6Ct4x09nhjhr5dZ+M9ZZ4xJUmU3kiVerDIhkhBkJY6kE96IleszHRrcTo7jB2fwfeik08G1TUd1mqq7M3sVY7M1ufPufEx/FtR03r0a7FYRwfNcGQtG0vToTTWIwk9uhUcb+tHfCf1obn37+TL0yWpP4WtqtHh1Ndssb+ffHwn9Onk63qhrvRxlqc7Uq/0G+rO3GnJ7+ezvXalc6OLPW/LveP7Q7Jy6X8Ufip4+Hx8Pj0/JbDO5QAAAAAAAAAAAAAAAAAVjWvT8qb82oP00lec96oQftPnN57K8Xyevmy7fhr1/J1uztBXJ/rZfcjpH9U+Hwjvn0jyq1ChGEdmN82223eUpPNyk3m2zWiNndtebzvP9o8oZEgpu+y/a/EkhjbIWhFkLIMLQhIhaEGFnj0hgo1Y2eTW6XFfp2FZjdlx5JpPJonKUH0VZdz4NcMzFMbN2totG8PFi6Gw+x7mQvvuwxk0002mmmmnZprNNNbmETETG09HW/J9rr5xbDYiS6ZepPd0qS3P+NfHfzOjp8/H+G3V4/tbsr2H+rij8HfH9P8Ab/C9m04IAAAAAAAAAAAAAABq9YtLLC0HO21OTUKUPp1Jbl3LNt8kzHkvwV3bei0s6nLFOkdZnwiOs/bz2UOjTcU3KTnOT2qk3vnN732LglwSRpfF6eZidorG1Y5RHhH76+MssY3JVmdkm1mrBEb9WOUiFoh48RpClD1ppeKKzaIZq4b27nm/21Qf9pH3kccMn8PfweqlWjNXjJSXY0yd91JrNeowIsJQZC0PHpDBxqw2Xv8AZfJ/kVmN2Wl5rO6uqTzo1Mmsk+3gY9m7Fo6w8k4W/fFb0Qs+Qm4tSi2mmmmnZpp3TT4NMnoiYi0TE84l3LUTWVY3D3lZVqdo1UuN/VmlylZ9zTR1MOX2lfN4PtPQTpMu0e7POPt8Y+yymZzQAAAAAAAAAAAAAHPtO43p8XKV/R0NqlT7Z/2s/etj7L5mlltxX+H7l6bQ4PY4I8bc5+H8sfr6x4PIUbSSfw+IRMPNjcZGnBzm7JfuyKzOzLjxzadoUjS+slSo2ovZjyW/xZimZlv0pTH5y0NTF582IqWzMLxkuCRbghinPfuWLVLQ2Oxk74elaKdpVnJwhHs2vae7KKbz3Fq4Jt7rBn7Ux4eWXn5R1/fyWjEecYSapY2ns3yhWjnCX2ll8nzXEWi1J2v804cmHUxxaeeffWev7+ceb1zVgmJ3Y2QtCDIWhptYMHtR6Rb47+2P6fmVtDPit3NJh57TcH7W5/xL1fy8SrNvswNkLbtvqnp14PFQrXexfZqpcacvWy5rKS7Y9pkxX4LbtLX6WNVgmnf1j4/36P0FCakk0000mmtzT3NHWeBmNuUpBAAAAAAAAAAAANdrDpDzfC1aq9aMbQXOpLqwXjJxRTJbhrMtnR4Pb564+6Z5/DrM+kKJhsOqcIw32Vrvi/ak3xbd34mlEbQ9Pe/HaZ6fvlHpDI43V7WsFd9p2YpO2bIXhzrWTTDrVMn1FlFdnPvZi96d3RiIxV4e/vaGUyWKbbo2JV2XDyc6mef1nOpdYek1ttZOct6pxfDLNtbk1zTWbFj4559HP7Q1v8PXhr70/Tz+zvuFw0KUI06cFCEVaMYpJJLgkjeiNnlbWm07z1Rx2Dp1qcqdWCnCSs4yV0/17eBExExtK2PJfHaL0naY73M9JaIlgqyoNuVCpfzeo98Ws3Sm+fLmvhoXx+znbu7vs9bpdZGrx+06Xj3o8Y/qj9XlkY23DGyF4Y5q+TIWhTNIUOjqSjyeXdvRVsb7xu2kcDGrBVks570suuspfHPxJ271Itz4WKpoptOys4+5jY4piY8HWPJbpN1cEqM318O9jvpvOm+614/YN/TX4qbeDyPbWn9lqZtHS3P17/rz9VxNhyAAAAAAAAAAAAVXXqtfzej9KcqslzjRjl/POm/A19RPSP3ydjsinO+Twjb1tP2iWjpzVs96MDq2iSc0lZDciJmd5V7WzGdHQaW+b2fs75fgvExXnk3dLXe3FPc5vWndkQvad53YyVWSlTcpKMVeUmkkt7bdkl4hMzERvPR+mtV9DRweEpYeNupHrNe1N5zl4tvuVlwOlSvDXZ4rU55zZZyT3/l3NqWYADWayaIjisNOi8pNbVOX0Kkc4S8H8Lopkpx12bWj1M6bNXJHrHjHfDmcKrnCM2rSzjNfRqQezNe9HOexiIido6dY+E84RkQvDHIheGg1mo+rPvi/mvxKyy16TD0amYlSjOjL2WqkflL/AEmSvg1cu8TxR8G+rUkk7b2JgraZnm2OoVXosao8K0ZQtzlBOpF+CVT7xl007X28XP7bp7TTxf8Apn6Ty/PZ0033kwAAAAAAAAAAAUnW2e1jEv7uhH/21JX/AKK96NTPP4/T8/8AD0HZddtPM+Nv9sf+zUmJ0XxkCm681rzhHlG/3m//AJRjt7zdwRtimfGVUWEk4qSi3e/wdvnclXZDzaa9n4oIWHyd4HpNKYWMlkpuf/ihKovjFGTDG94anaF+HTXmPh852fow6Dx4AAAcw09hujxmKglZOVOvH/uxtP8AnhJ+Jz8tdrz83ruz8vtNPjme7evy5x9JiGsZidGEGQs8Wn6CdCXOLT+P5XEwnHbeVf1WrbOMgvpbUX4pv5xRNWPL0lfKlMtMMFbPmBnsV6U17NSnd/wuaUv5XItj5Xhj1ccenvWfCfpzdXOi8YAAAAAAAAAAACg6x/8APVvqUF/Uf4mnl9+fT9Xpez/+Fr8bf+LwMxNx8CVG12Xp/sR/ExW95vYv/wAfVPQtBSw0HfPr/wBSQIjknWoIlEw2/k+SjpSh29Kl39DN/KLM2D33M7Wj/wCtPxj83ajfeTAAADnuua/4+XbhaV/CtVsaWo9/0/V6bsj/AIaP+uf9sK9Y13ZS2kufNMI23eHSGdOf1ZfJlZZqxtMKfo2ps4qk/wDEh8ZJfiWhiydZh0+ozJLTq8GNqWhJrgm/ciu/Nl4d6zDr503hwAAAAAAAAAAAULWaNsfUX0qVCS+9Vi/kjTze/wCkfq9J2dO+ljytaPpWWvMTdfAlUNd6HXhLnFr7rv8A6jFfq3tNO+OY83h0PiWqFvoya8JJNfHa9wW6IYnSPf70iVJR1e070OOw9Vu0YVY7TbyUJXhN/dlIvjnhtEtTV45y4L0jw/Lm/SB0niwAAA5xrRV28diGs+jhQo+PWqv+ojRzTvefSHquzK8Gmpv3za35R+ktQ1bs7eeXEwul1eaTKs0Q82MlanN/wy+TIXhTMIr4mkv8Sn/nRaOjBkn8TolbFEzZWuNr8TiFPqJ5z6q75ZfiRHOdl7zFKTbwjd286rwAAAAAAAAAAAAKbrxS2a+HqcJxqUn9bKpD4Qqe81dRHOJ9Hd7IvvjyU8NrfpP5w0hgdR8A1Os2E6Sg7b4dZd3H4fIpeN4bOlvw32nvUSMcpR4O3hJeq/mvtGPduzV45QLbsM1Q2bkse2zv/ky1jWLwcYyl6aglTqJ72kupPxS98ZHQw34qvJdpaX2GadvdnnH29FvMrngGHG4qNKnKpN2jCLlJ9iV/eRMxEbyvjx2yXiles8nK6lRuDnO6nVnKtNPhKd9mPhGy8Ec207857+b2mKkVmK16Vjhj06z6zzeScijaiGNkLPDpapajPtVvfkQvCpaPnavGT3QvP7qbXxSMkdGrbndsMRptvcRsvxPZqdGeJ0jhqb3dLGbXZS9I/wDJbxL4q73hqa7Jwae8+W3z5fq/RB0niwAAAAAAAAAAAaDXjDOeDlNK8qDjXXdTfXt3wc14mHPXenw5uj2Vl4NTWJ6W/D8+n12lUb3zW57jUegfAlFhKm6X0b0NRu3op/C/Dw4GC0bS6mHJGSvm0eMwrg7b080+aESm1XjlEswzVstXtNVcHiI16T6yylF+rOD3wl2Oy8UnwL0vNZ3hq6nTUz45pb/Eu+ar604fH09qlK00uvSl68H2riv4ll45HQpki8cnkdVpMmntteOXdPdLeF2q57rPpyOLn0VN3w1KSdSa3VqkXeMI84RaTb4u3K70s2TjnaOkfV6bs7RTp6+0vH+pbpH9MT1mfOY6eENDiKzk7s15nd16UisbQwSIZYQkQtDR6y17RjHndvwyXzfuCZnaJlWaT9Z88vjd/L4l5atec7hC7pnkS0XtV62JaypxVKPLam9qXilGP3zZ01ecy4fbeXalccd/P7fr8nYDcedAAAAAAAAAAABGcE001dNNNc094TE7TvDluGountUHvozlSz3uMX1H4wcX4nO24fw+D2U5IyxGWP5o39e/5TuysD4QMNelGcXGSunzExuvW01neGgxWhnFNLrQ4J713MxTTZv01FbdWixWimnl7nk/18Cu+zLwRbo11TCS5E8UKTht3MmDwlfbUqTlGcXdSg5KUXzTjmi0X8GK+mmY2vtt5ug0MRj6tDosZi5Ol7UUoxnNW9WUoq+z2b3fMyze9o2tPJz6aXS4L8WKu9vHujziJ7/3BVqKyjFbMI5JIpM90NqtZ34rc5lgZVlQZC0INhaFO09iduo7blkvD9bk1UzTtGzXQWRaWGsckiFn6E8nGhnhdH0oyVp1L1Z81KpZpPtUVBeB0MNeGkPHdo5/bai0x0jlHp+91nMrSAAAAAAAAAAAAAouumE6LFQrL1a66Of/AFaacoPvcNpfYRqZ67Wi3i9F2Tm48NsU9a84+E8p+U7T6y1JhdF8ZCUQlFhMMc4J70mQvEyxeb0v7qPuX5EbR4LceT+pljXsrRikTurwb9ZYak297uRuyVrEdGJsqugwsg2Qs8eksRsU5S47l3v938CFoUmq7yLxyhrXnis+hKwah6E88x9Kk1eEfS1eWxBrJ9kpOMftGTFTits09fqPYYJtHWeUfGX6LOi8aAAAAAAAAAAAAAA1WtGjXiMLUpx9e23TfKpB7UPBtWfY2Y8tOOsw29DqPYZ63np0n4Tyn6OfYaupwjNK20r2e9Pin2pmjE7w9XevDaYTCHxsJRbISgFmOTIXhBkLIMJRbITCDCyDZC8K3rJiryUF7O/vf6W94jqWnarQwRdr1SIS7V5G9CdFhJYmS6+IfV7KUG1H3vafatk3dPTau/i8x2xqOPL7OOlfznr9nQTYcgAAAAAAAAAAAAAAA5pprB+b4yrT9ip6en9t+kiu6d32KaNDJXhvMePN63RZvb6atu+v4Z9Ok/Ll6POyjYRbIWRtcJ6Emkv3kERG7zzeZVliEGFkWyFkGFkWQmHmxddQg5Ph8XwRC8QpOLquUm3vbuy1WHJO87IEqttqroOWNxdPDxulJ3qSXs04+s+/cl2tF6U47bNfV6iNPim/y+L9I4ehGnCMIRUYwSjGK3KMVZJdiSOlEbPFWtNpmZ6sgQAAAAAAAAAAAAAAAVrXvRjq4dVoK9XDt1Ipb5Qt6WHjFXS5xiYM9OKu8dYdTsnUxizcFp/DflPlPdPpP0mVNp1FKKkndNJp9jNPfd6OazWdpfUrg6ErL95poEc2CcmyGWIiGNkLIthKDZC0IshZCTCYV3WLGXewvZ39r/RfMRzTaeGrQIswQ+hLt/kk1d83wvnE42q4i0lffGkvUX2s5eMeRvYKcNd573le1tV7XLwV6V/Pv+y+GdygAAAAAAAAAAAAAAAAA5bpTR/muKnQStTlerR5KEn1ofZlfLk4nPyU4L7d3c9hpNR/EaeMk+9H4bfpPrH13Qk0rrMqzxvPNhqTuVlesbMTZC6LCyDZCyLYSg2Qs82OxKpwcvd2vgQtEKVXqOUi0cmG88UvhKvRYNQ9XvPsbCm16KHpKr/gi/Vvzk7Luu+BkxU47NPX6n+HwzMdZ5R9/T7P0QlbJHReNfQAAAAAAAAAAAAAAAAABXdd9Futh+kgn0tB9JC2+SS68PtRvlzSMOenFXeOsOl2XqYw5uG3u25T5eE+k/TdQ4V1OKknk1ddzNHfd6rgms7S+NkJRbCUGyFoQbC0ItkJRbCys6wYy8tlPKPz4/l7xHMtPDVpUWYIGwl37ya6u+Z4NOcbVq1qlTmsupB/VT98pHQw04a+byHaOq9vm5e7HKPv6/lstplc8AAAAAAAAAAAAAAAAAAADlGndH+aYydFK1OrerR5JN+kpr6rztyaOdlpwX27pez0Go/idPFp96v4bfpPrHL4w8rZjbaLZCUGwtCDIWRbCXj0li+jg3xeUe/n4ELRCnVZXZaGK87ygSqu3ku1X87xPTVI+goNN33TqKzjDtSyk/BcTPgx8U7z0hyu1NX7HHwV9630j98ndTeeVAAAAAAAAAAAAAAAAAAAAAVvXzQ7xGFcqa9NRfS0+bt60PtK+XNIw58fHXl1h0+ytXGnzxxe7blP39Jc7w2IVSCmtzV/zRz4nd661ZrO0ptghBshZFsJQlK2YTCp6XxvSTvw3Lu/UQXnaNmtLML1aK0dUxNeFCkrzqPZXJcW32JJt9iLVrNp2hizZa4qTe3SH6Q1f0PTweHhh6fqwWb4yk85Sfa3dnRrWKxtDxefNbNkm9ustiWYQAAAAAAAAAAAAAAAAAAAAADkWsujfM8dKCVqVe9WlyUr9eC7n8HE5uanBfyl7Xs3U/xOmiZ96nKfh3T+/CXkbMTdhFsLIthLT6cxllsJ7/W7uCIXjlG6tTldloa9p3lBslV2ryS6reb0fO6sbVay6ie+FLevGWTfYo7szdwY+GN5eY7V1ntb+zr7sfWf7fd0I2HIAAAAAAAAAAAAAAAAAAAAAAAFc190G8VhJKC9LS9JStvco74r6yuu+3Iw58fHTl1dLsrWfw2oibe7PKfhPf6dXMMFilUgpcePec2J3e0vThnZmZKHnxmIVODk/Bc2QtEbqji6zk2283myYhXJbueZlmBbfJtqt59itqpG9CjaVS+6cvZp+O99itxRmw4+Kd56Ob2lrPYY+GvvT08vP7f2d+N95MAAAAAAAAAAAAAAAAAAAAAAAAAHI9eNE+Z43pYq1DEtvshV3yXZe+0u+XI52ox8Ft46S9n2Pq/4jB7O3vU+sd3y6fLxa5swOmrWl8btyy9VZLt5sjqvP4YaeTMjVmWXR+CqV6sKNKO1OpJRiu18XySzbfBJlq1mZ2hhy5K46ze3SH6Q1X0HTwWFhh4Z7KvOVrOc360n3v3JJcDo0rFY2h43U57Z8k3t/iPBtSzAAAAAAAAAAAAAAAAAAAAAAAAAADVazaGjjMLOhKybV4S+jNerL37+xtFMlIvXhbWi1VtNmrlju6x4x3w4bjMXOEHRmnGpBuE0+Gzk138DkzvHKXv6TW0Res7xPOFfr1LsvEMGS28sDZZhmXZPI/qr0VLz6rH0lVWop+zSdntd8v8ALb6TNzBj2jil5vtXV8dvZV6R1+P9vzdKNhxwAAAAAAAAAAAAAAAAAAAAAAAAAAAHLPK1qxNzji6FOU3O0KsYRcntboT2Ur5rqvuiaeoxbzxQ9H2P2hFcc4Mk7bc4mfrH6x6q3oPyY47EWlUUcPB8amc7dlOPyk4laYLT15M2ftbBTlX8U+XT5/5dD0F5MsBh7SnB4ifOtZx8KS6tu+/ebFcFY83Hzdp58nSeGPL79VzStkjM5z6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q=='
                alt='Map marker'/>}
            <a href={url}>
                <img 
                className='House-img'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbs1azERWx8RawApKCB21IqHS__wr-OWnzdw&s" 
                alt="House on land" />
            </a>
        </div>
    );
}

export default function MapDisplay() {
    return (
        <div className="Map-display">
            <Map />
            <Houses url="" className="Houses House-1"/>
            <Houses url="" className="Houses House-2"/>
            <Houses url="" className="Houses House-3"/>
            <Houses url="" className="Houses House-4"/>
            <Houses url="" className="Houses House-5"/>
        </div>
    );
}