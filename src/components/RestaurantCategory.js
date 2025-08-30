import ItemList from './ItemList';
const RestaurantCategory = ({data, showItems, setShowIndex}) => {
   const handleClick = () =>{
     setShowIndex();
   }
  return (
    <div>
        <div className='cursor-pointer w-6/12 mx-auto my-4 bg-gray-50 shadow-amber-50 p-4'>
            <div className='flex justify-between' onClick={handleClick}>
                <span className='font-bold text-lg'>{data?.title} ({data.itemCards.length})</span>
               { showItems?<span>▲</span>:<span>▼</span>}
            </div>
           {showItems && <ItemList data = {data.itemCards}/>}
        </div>
    </div>
  )
}
export default RestaurantCategory