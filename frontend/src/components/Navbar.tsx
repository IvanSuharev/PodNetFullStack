import { Link } from "@mui/material";
import useAuth from '../hooks/useAuth';
import '../styles/navbar.css';
import { AppBar, Container, Toolbar, InputBase, Box } from "@mui/material";
import { Search } from "@mui/icons-material";

function NavBar(){
    const {isAuthenticated} = useAuth()
    return(
        <AppBar 
            position="fixed" 
            sx={{ 
                background: '#1976d2',
                //boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .2)',
                py: 0.5
            }}
        >
            <Container fixed>
                <Toolbar sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Link 
                            href='/' 
                            variant="h6"
                            sx={{ 
                                color: '#fff', 
                                textDecoration: 'none',
                                fontFamily: 'monospace',
                                fontWeight: 'bold',
                                letterSpacing: '.3rem',
                                '&:hover': {
                                    color: '#ffd54f'
                                }
                            }}
                        >
                            PODNET
                        </Link>
                        
                        <Link 
                            href='/messenger' 
                            sx={{ 
                                textDecoration: 'none',
                                color: '#fff', 
                                '&:hover': {
                                    color: '#ffd54f',
                                    transform: 'scale(1.05)'
                                }
                            }}
                        >
                            Мессенджер
                        </Link>
                        
                        <Link 
                            href='/admin' 
                            sx={{ 
                                textDecoration: 'none',
                                color: '#fff', 
                                '&:hover': {
                                    color: '#ffd54f'
                                }
                            }}
                        >
                            Профиль
                        </Link>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            borderRadius: 1,
                            px: 2,
                            py: 0.5
                        }}>
                            <Search sx={{ color: '#fff', mr: 1 }} />
                            <InputBase
                                placeholder="Search podcasts..."
                                sx={{ 
                                    color: '#fff',
                                    '&::placeholder': {
                                        color: 'rgba(255, 255, 255, 0.7)'
                                    }
                                }}
                            />
                        </Box>

                        {isAuthenticated ? (
                            <Link 
                                href="/logout" 
                                sx={{ textDecoration: 'none',
                                    color: '#fff', 
                                    '&:hover': {
                                        color: '#ffd54f'
                                    }
                                }}
                            >
                                выйти
                            </Link>
                        ) : (
                            <Link 
                                href="/login" 
                                sx={{ textDecoration: 'none',
                                    color: '#fff', 
                                    '&:hover': {
                                        color: '#ffd54f'
                                    }
                                }}
                            >
                                Логин
                            </Link>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default NavBar