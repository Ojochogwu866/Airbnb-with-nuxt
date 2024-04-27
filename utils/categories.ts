
import TrendingIcon from '@/assets/icons/trending.svg'
import BoatsIcon from '@/assets/icons/boats.svg'
import BeachIcon from '@/assets/icons/beachfront.svg'
import TopIcon from '@/assets/icons/topcities.svg'
import LakeIcon from '@/assets/icons/lake.svg'
import TreyIcon from '@/assets/icons/treyhome.svg'
import OMGIcon from '@/assets/icons/omg.svg'
import ContainersIcon from '@/assets/icons/containers.svg'
import EarthIcon from '@/assets/icons/earthhomes.svg'
import HistoricalIcon from '@/assets/icons/historicalhomes.svg'
import LuxeIcon from '@/assets/icons/luxe.svg'
import NationalIcon from '@/assets/icons/nationalparks.svg'
import NewIcon from '@/assets/icons/new.svg'
import CabinIcon from '@/assets/icons/cabins.svg'
import AmazingIcon from '@/assets/icons/amazingviews.svg'

interface Category {
    icon: any
    title: string
}

const categories: Category[] = [
    { icon: TrendingIcon, title: 'Trending' },
    { icon: BoatsIcon, title: 'Boats' },
    { icon: BeachIcon, title: 'Beach' },
    { icon: TopIcon, title: 'Top Cities' },
    { icon: LakeIcon, title: 'Lake' },
    { icon: TreyIcon, title: 'Trey Homes' },
    { icon: CabinIcon, title: 'Cabins' },
    { icon: AmazingIcon, title: 'Amazing Views' },
    { icon: NewIcon, title: 'New' },
    { icon: LuxeIcon, title: 'Luxe' },
    { icon: NationalIcon, title: 'National Parks' },
    { icon: HistoricalIcon, title: 'Historical Homes' },
    { icon: EarthIcon, title: 'Earth Homes' },
    { icon: ContainersIcon, title: 'Containers' },
    { icon: OMGIcon, title: 'OMG' },
]

export default categories;