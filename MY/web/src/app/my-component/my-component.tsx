import styles from './my-component.module.css';

export function MyComponent() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyComponent!</h1>
    </div>
  );
}

export default MyComponent;
