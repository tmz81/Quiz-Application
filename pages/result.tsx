import styles from '../styles/Result.module.css';
import Statistic from '../components/Statictis';
import Button from '../components/Button';
import { useRouter } from 'next/router';

export default function Result() {
  const router = useRouter();

  const total = +router.query.total
  const rights = +router.query.rights
  const percentage = Math.round((rights / total) * 100)

  return (
    <div className={styles.result}>
      <h1>Resultado Final</h1>
      <div style={{display: 'flex'}}>
        <Statistic text="Perguntas" value={total}/>
        <Statistic text="Certas" value={rights} backgroundColor="#9CD2A4"/>
        <Statistic text="Certas" value={`${percentage}`} backgroundColor="#DE6A33"/>
      </div>
      <Button href='/' text='Tentar Novamente'/>
    </div>
  )
}