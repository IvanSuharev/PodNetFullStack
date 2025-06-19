import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { Container, TextField, Button, Typography, Box, CircularProgress } from '@mui/material';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        try {
            const url = isLogin ? "/auth/login" : "/auth/registration";
            const { data } = await api.post(url, {
                username: formData.username.trim(),
                password: formData.password.trim(),
                ...(!isLogin && { email: formData.email.trim() })
            });

            // Явное обновление заголовков axios
            api.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);

            // Принудительный редирект
            window.location.href = '/';
        } catch (err) {
            setError(err.response?.data || "Ошибка сервера");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{
                mt: 10,
                p: 4,
                boxShadow: 3,
                borderRadius: 2,
                bgcolor: 'background.paper'
            }}>
                <Typography variant="h4" align="center" gutterBottom>
                    {isLogin ? 'Вход' : 'Регистрация'}
                </Typography>

                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    )}

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Имя пользователя"
                        required
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Пароль"
                        type="password"
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />

                    {error && (
                        <Typography color="error" sx={{ mt: 2 }}>
                            {error}
                        </Typography>
                    )}

                    <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        sx={{ mt: 3 }}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} /> : isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                </form>

                <Button
                    fullWidth
                    color="secondary"
                    sx={{ mt: 2 }}
                    onClick={() => setIsLogin(!isLogin)}
                >
                    {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
                </Button>
            </Box>
        </Container>
    );
};

export default Login;