import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Headless from '@tippyjs/react/headless';
import { useEffect, useRef, useState, useContext } from 'react';
import AccountItem from '~/components/AccountItem';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import * as SearchApi from '~/services/SearchApi.js';
import { UserContext } from '../../DefaultLayout';
const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    let debounceValue = useDebounce(searchValue, 500);
    const inputRef = useRef();
    const [loading, setLoading] = useState(false);
    const handleHideResult = () => setShowResult(false);
    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const result = await SearchApi.search(debounceValue);

            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounceValue]);

    const getUserData = useContext(UserContext);
    const handleChangeSearchValue = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };
    return (
        /// add div or span to remove thư warning of tippy
        <div>
            <Headless
                interactive={true}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex={-1}>
                        <PopperWrapper>
                            <h4 className={cx('search-tile')}>Accounts</h4>
                            {searchResult.map((account) => (
                                <AccountItem
                                    key={account.id}
                                    data={account}
                                    onClick={() => {
                                        setShowResult(false);
                                        localStorage.setItem('user', JSON.stringify(account));
                                        getUserData(account);
                                    }}
                                />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        value={searchValue}
                        onChange={handleChangeSearchValue}
                        onFocus={() => setShowResult(true)}
                    />
                    {searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                                setSearchResult([]);
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Headless>
        </div>
    );
}

export default Search;
