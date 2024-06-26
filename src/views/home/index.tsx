import { getCurrentDifficulty } from '@/api';

const Index = () => {
    return (
        <div
            onClick={async () => {
                const res = await getCurrentDifficulty({});
                if (res) {
                    console.log('res', res);
                }
            }}
        >
            <h1>starter page</h1>
        </div>
    );
};

export default Index;
