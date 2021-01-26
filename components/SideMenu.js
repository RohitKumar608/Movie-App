import Modal from './modal'
import MovieCreateForm from './movieCreateForm'

const SideMenu = ({categories=[]}) => {
  return (
    <div>
      <Modal>
        <MovieCreateForm />
      </Modal>
      <h1 className='my-4'>Shop Name</h1>
      <div className='list-group'>
       {categories.map((category)=> <a id={category.id} href='#' className='list-group-item'>
          {category.name}
        </a>
       )}
      </div>
    </div>
  )
}

export default SideMenu
