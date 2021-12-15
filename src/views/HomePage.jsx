export default function HomePage() {
 
const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontWeight: 500,
      fontSize: 40,
      textAlign: 'center',
      color:'#303C6C',
    },
  };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Добро пожаловать 👋🏻</h1>
        </div>
    )
}