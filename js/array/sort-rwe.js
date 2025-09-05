const array = [
  {
    createdAt: new Date('2025-09-05T11:00:00.000Z'),
    name: 'Jane Smith',
    bankAccount: '9237648419'
  },
  {
    createdAt: new Date('2025-09-05T09:45:00.000Z'),
    name: 'Alice Johnson',
    bankAccount: '4837265980'
  },
  {
    createdAt: new Date('2025-09-04T14:00:00.000Z'),
    name: 'Bob Brown',
    bankAccount: '9584731928'
  },
  {
    createdAt: new Date('2025-09-06T16:00:00.000Z'),
    name: 'Charlie Davis',
    bankAccount: '8236475192'
  },
  {
    createdAt: new Date('2025-09-03T10:00:00.000Z'),
    name: 'David Harris',
    bankAccount: '6728193746'
  }
];

const sortBy = (array, type = 'asc', column='createdAt') => {
    const copyArray = [...array]

    return copyArray.sort((a,b) => {
        const asc = type === 'asc'
        const valueA = a[column]
        const valueB = b[column]

        if(valueA > valueB){
            return asc ? 1 : -1
        }

        if(valueA < valueB){
            return asc ? -1 : 1
        }

        else {
            return 0
        }
    })
}


// console.log(sortBy(array, 'asc', 'createdAt'));
// console.log(sortBy(array, 'desc', 'createdAt'));

// console.log(sortBy(array, 'asc', 'name'));
// console.log(sortBy(array, 'desc', 'name'));

// console.log(sortBy(array, 'asc', 'bankAccount'));
// console.log(sortBy(array, 'desc', 'bankAccount'));
