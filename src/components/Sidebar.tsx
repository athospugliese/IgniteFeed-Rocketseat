import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}> 
      <img
        className={styles.cover}
        src="https://miro.medium.com/max/1400/1*4ihBhwd0DygCWHN-Bo24BA.png" />
      <div className ={styles.profile}>
        <Avatar
          src="https://github.com/athospugliese.png"
        />
        
        <strong>Athos Pugliese</strong>
        <span>Software Developer</span>
        <span>Front-end Jr.</span>

      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}