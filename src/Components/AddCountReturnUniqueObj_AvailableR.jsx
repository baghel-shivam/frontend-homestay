import React, { useEffect, useState } from 'react';

export default function AddCountReturnUniqueObj_AvailableR({ data, collectRoom, setCollectRooms }) {
    const [filter_d, setFilter_D] = useState([]);

    function addCountAndRemoveDuplicates(arr) {
        const priceCounts = arr?.reduce((acc, item) => {
            const { base_price } = item;
            acc[base_price] = acc[base_price] ? acc[base_price] + 1 : 1;
            return acc;
        }, {});

        const uniqueItems = arr?.filter((item, index, self) =>
            index === self?.findIndex(t => t.base_price === item.base_price)
        );

        setFilter_D(uniqueItems?.map(item => ({
            ...item,
            count: priceCounts[item.base_price],
            bookCount: 0,
            btnShow: true, // Set initial button visibility state for each item
        })));
    }

    useEffect(() => {
        addCountAndRemoveDuplicates(data);
    }, [data]);

    const addCount = (id) => {
        setFilter_D(prevData => {
            return prevData?.map((item) => {
                if (id === item.id) {
                    if (item.count > item.bookCount) {
                        const updatedItem = { ...item, bookCount: item.bookCount + 1, btnShow: false };
                        setCollectRooms(prevRooms => prevRooms.map(room => room.id === updatedItem.id ? updatedItem : room));
                        return updatedItem;
                    } else {
                        alert('No more available items.');
                    }
                }
                return item;
            });
        });
    };

    const DelCount = (id) => {
        setFilter_D(prevData => {
            return prevData?.map((item) => {
                if (id === item.id) {
                    if (item.bookCount > 0) {
                        const updatedItem = { ...item, bookCount: item.bookCount - 1 }
                        setCollectRooms(prevRooms => prevRooms.map(room => room.id === updatedItem.id ? updatedItem : room));
                        return updatedItem;
                    } else if (item?.count === 0) {
                        return { ...item, btnShow: true };
                    }
                    else {
                        alert('No more available items to remove.');
                    }
                }
                return item;
            });
        });
    };

    useEffect(() => {
        setCollectRooms((prevRooms) => {
          const filterData = Array.isArray(filter_d) ? filter_d : [];
           const updatedRooms = [...prevRooms, ...filterData];
           const uniqueRooms = Array.from(new Set(updatedRooms.map((room) => room.id)))?.map((id) => {
                return updatedRooms.find((room) => room.id === id);
            });
            return uniqueRooms;
        });

    }, [filter_d, setCollectRooms]);


    return (
        <>
            {filter_d?.map((item, index) => (
                <tr key={index} className=''>
                    <td>{item?.category}</td>
                    <td>{item?.base_price}</td>
                    <td>{item?.count}</td>
                    <td>
                        {item?.btnShow ? (
                            <button className=' btn btn-sm btn-success px-3 w-lg-50 w-sm-100' onClick={() => addCount(item?.id)}>
                                Add
                            </button>
                        ) : (
                            <div style={{ maxWidth: '10vh' }} className='btn  m-auto btn-success btn-sm  p-0 text-light d-flex justify-content-evenly align-items-center'>
                                <div onClick={() => DelCount(item?.id)}>
                                    <i className="bi bi-dash fs-5"></i>
                                </div>
                                <div>{item?.bookCount}</div>
                                <div onClick={() => addCount(item?.id)}>
                                    <i className="bi bi-plus fs-5"></i>
                                </div>
                            </div>
                        )}
                    </td>
                </tr>
            ))}
        </>
    );
}
