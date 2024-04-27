
interface CardData {
    id: string
    title: string
    images: string[]
    location: string
    rating: number
    availabilityDates: string
    price: string
    distance: string
}

const cardData: CardData[] = [
    {
        id: '1',
        title: 'Beautiful Beachfront Villa',
        images: [
            'https://plus.unsplash.com/premium_photo-1664121799972-98e5aa03d31b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFjYXRpb24lMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1683917068511-289e8fbb2588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZhY2F0aW9uJTIwaG9tZXN8ZW58MHx8MHx8fDA%3D'
        ],
        location: 'Bali, Indonesia',
        rating: 4.8,
        availabilityDates: 'Jun 1 - Jun 7',
        price: '$250 night',
        distance: '2.5 miles away',
    },
    {
        id: '2',
        title: 'Cozy Mountain Cabin',
        images: [
            'https://images.unsplash.com/photo-1604348825621-22800b6ed16d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1664121799972-98e5aa03d31b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFjYXRpb24lMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1683917068511-289e8fbb2588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZhY2F0aW9uJTIwaG9tZXN8ZW58MHx8MHx8fDA%3D'
        ],
        location: 'Aspen, Colorado',
        rating: 4.5,
        availabilityDates: 'Jul 15 - Jul 22',
        price: '$175 night',
        distance: '1.2 miles away',
    },
    {
        id: '3',
        title: 'Beautiful Beachfront Villa',
        images: [
            'https://plus.unsplash.com/premium_photo-1664121799972-98e5aa03d31b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFjYXRpb24lMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1683917068511-289e8fbb2588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZhY2F0aW9uJTIwaG9tZXN8ZW58MHx8MHx8fDA%3D'
        ],
        location: 'Bali, Indonesia',
        rating: 4.8,
        availabilityDates: 'Jun 1 - Jun 7',
        price: '$250 night',
        distance: '2.5 miles away',
    },
    {
        id: '4',
        title: 'Cozy Mountain Cabin',
        images: [
            'https://images.unsplash.com/photo-1604348825621-22800b6ed16d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFjYXRpb24lMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1683917068511-289e8fbb2588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZhY2F0aW9uJTIwaG9tZXN8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1604348825621-22800b6ed16d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D'
        ],
        location: 'Aspen, Colorado',
        rating: 4.5,
        availabilityDates: 'Jul 15 - Jul 22',
        price: '$175 night',
        distance: '1.2 miles away',
    },
    {
        id: '5',
        title: 'Beautiful Beachfront Villa',
        images: [
            'https://plus.unsplash.com/premium_photo-1664121799972-98e5aa03d31b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1664121799972-98e5aa03d31b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1664121799972-98e5aa03d31b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
        ],
        location: 'Bali, Indonesia',
        rating: 4.8,
        availabilityDates: 'Jun 1 - Jun 7',
        price: '$250 night',
        distance: '2.5 miles away',
    },
    {
        id: '6',
        title: 'Cozy Mountain Cabin',
        images: [
            'https://images.unsplash.com/photo-1604348825621-22800b6ed16d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFjYXRpb24lMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1683917068511-289e8fbb2588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZhY2F0aW9uJTIwaG9tZXN8ZW58MHx8MHx8fDA%3D'
        ],
        location: 'Aspen, Colorado',
        rating: 4.5,
        availabilityDates: 'Jul 15 - Jul 22',
        price: '$175 night',
        distance: '1.2 miles away',
    },
    {
        id: '7',
        title: 'Beautiful Beachfront Villa',
        images: [
            'https://plus.unsplash.com/premium_photo-1664121799972-98e5aa03d31b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFjYXRpb24lMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1683917068511-289e8fbb2588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZhY2F0aW9uJTIwaG9tZXN8ZW58MHx8MHx8fDA%3D'
        ],
        location: 'Bali, Indonesia',
        rating: 4.8,
        availabilityDates: 'Jun 1 - Jun 7',
        price: '$250 night',
        distance: '2.5 miles away',
    },
    {
        id: '8',
        title: 'Cozy Mountain Cabin',
        images: [
            'https://images.unsplash.com/photo-1604348825621-22800b6ed16d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmFjYXRpb24lMjBob21lc3xlbnwwfHwwfHx8MA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1683917068511-289e8fbb2588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZhY2F0aW9uJTIwaG9tZXN8ZW58MHx8MHx8fDA%3D'
        ],
        location: 'Aspen, Colorado',
        rating: 4.5,
        availabilityDates: 'Jul 15 - Jul 22',
        price: '$175 night',
        distance: '1.2 miles away',
    },
]

export default cardData;