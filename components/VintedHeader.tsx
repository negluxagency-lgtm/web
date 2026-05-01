import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ChevronDown, Bell, Mail, HelpCircle, Heart } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';
import ImageSearchModal from './ImageSearchModal';

interface VintedHeaderProps {
  onImageSearchOpen?: () => void;
}

const VintedHeader: React.FC<VintedHeaderProps> = () => {
  const [searchText, setSearchText] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [searchType, setSearchType] = useState<'articulos' | 'miembros'>('articulos');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showImageSearch, setShowImageSearch] = useState(false);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchText.trim()) {
      window.location.href = `https://www.vinted.es/catalog?search_text=${encodeURIComponent(searchText.trim())}`;
    }
  };

  return (
    <>
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e5e7e5' }}>
        {/* Top bar */}
        <div style={{ borderBottom: '1px solid #e5e7e5' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px', height: 60, display: 'flex', alignItems: 'center', gap: 40 }}>
            
            {/* Logo */}
            <div style={{ flexShrink: 0 }}>
              <Link href="/Roni">
                <Image
                  src="/Nelux_logo.png"
                  alt="Nelux"
                  width={90}
                  height={36}
                  style={{ objectFit: 'contain', cursor: 'pointer' }}
                  priority
                />
              </Link>
            </div>

            {/* Search Bar */}
            <div style={{ flex: 1, maxWidth: 600, position: 'relative' }}>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center', background: '#f2f2f2', borderRadius: 4, height: 36 }}>
                
                {/* Selector de búsqueda */}
                <div 
                  onClick={() => setShowSearchDropdown(!showSearchDropdown)}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 4, 
                    padding: '0 12px', 
                    borderRight: '1px solid #d1d1d1', 
                    cursor: 'pointer',
                    height: '100%'
                  }}
                >
                  <span style={{ fontSize: 14, color: '#374151' }}>
                    {searchType === 'articulos' ? 'Artículos' : 'Miembros'}
                  </span>
                  <ChevronDown size={14} color="#6b7280" />
                </div>

                {/* Dropdown de opciones */}
                {showSearchDropdown && (
                  <div style={{ 
                    position: 'absolute', 
                    top: 'calc(100% + 4px)', 
                    left: 0, 
                    background: '#fff', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
                    borderRadius: 4, 
                    zIndex: 100, 
                    width: 150,
                    overflow: 'hidden',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div 
                      onClick={() => { setSearchType('articulos'); setShowSearchDropdown(false); }}
                      style={{ padding: '8px 12px', fontSize: 14, cursor: 'pointer', color: '#374151' }}
                      className="hover:bg-[#f3f4f6]"
                    >
                      Artículos
                    </div>
                    <div 
                      onClick={() => { setSearchType('miembros'); setShowSearchDropdown(false); }}
                      style={{ padding: '8px 12px', fontSize: 14, cursor: 'pointer', color: '#374151' }}
                      className="hover:bg-[#f3f4f6]"
                    >
                      Miembros
                    </div>
                  </div>
                )}

                <div style={{ padding: '0 10px', color: '#9ca3af' }}>
                  <Search size={18} />
                </div>
                <input
                  type="text"
                  placeholder={searchType === 'articulos' ? "Buscar artículos" : "Buscar miembros"}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={handleSearch}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    fontSize: 14,
                    color: '#111827'
                  }}
                />
                <div 
                  onClick={() => setShowImageSearch(true)}
                  style={{ padding: '0 12px', cursor: 'pointer', color: '#717171' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                </div>
              </div>
            </div>

            {/* Right Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <div style={{ cursor: 'pointer', position: 'relative' }}>
                <Mail size={22} color="#9ca3af" />
                <div style={{ position: 'absolute', top: -4, right: -4, width: 18, height: 18, backgroundColor: '#c83232', borderRadius: '50%', color: '#fff', fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>41</div>
              </div>
              <div style={{ cursor: 'pointer', position: 'relative' }}>
                <Bell size={22} color="#9ca3af" />
              </div>
              <div style={{ cursor: 'pointer' }}>
                <Heart size={22} color="#9ca3af" />
              </div>
              
              {/* Profile */}
              <div style={{ position: 'relative' }}>
                <div 
                  onClick={() => setShowProfile(!showProfile)}
                  style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}
                >
                  <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', border: '1px solid #e5e7e5' }}>
                    <Image
                      src="/perfil.png?v=1"
                      alt="Perfil"
                      width={32}
                      height={32}
                      unoptimized
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="#9ca3af" style={{ marginLeft: 2, transform: showProfile ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}><path d="M0 7.33l12 12 12-12z" /></svg>
                </div>
                {showProfile && (
                  <ProfileDropdown onClose={() => setShowProfile(false)} />
                )}
              </div>

              {/* Tickets */}
              <Link href="/tickets" style={{ background: '#1a1a1a', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 10px', fontWeight: 400, fontSize: 13, cursor: 'pointer', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                🎫 Tickets
              </Link>

              {/* Vender ahora */}
              <button onClick={() => window.location.href = 'https://www.vinted.es/items/new'} style={{ background: '#007782', color: '#fff', border: 'none', borderRadius: 4, padding: '6px 10px', fontWeight: 400, fontSize: 13, cursor: 'pointer' }}>
                Vender ahora
              </button>

              {/* Help */}
              <div style={{ cursor: 'pointer' }}>
                <HelpCircle size={22} color="#9ca3af" />
              </div>

              {/* Lang */}
              <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: 'none', color: '#4b5563', fontSize: 14, cursor: 'pointer', fontWeight: 400, marginLeft: 12 }}>
                ES <svg width="8" height="8" viewBox="0 0 24 24" fill="#4b5563" style={{ marginTop: 2 }}><path d="M0 7.33l12 12 12-12z" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Category nav */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px' }}>
          <nav style={{ display: 'flex', gap: 8, height: 44, alignItems: 'center', paddingLeft: 0 }}>
            {[
              { name: 'Mujer', url: 'https://www.vinted.es/catalog/1904-women' },
              { name: 'Hombre', url: 'https://www.vinted.es/catalog/5-men' },
              { name: 'Moda de diseño', url: 'https://www.vinted.es/?tab=designer' },
              { name: 'Niños', url: 'https://www.vinted.es/catalog/1193-kids' },
              { name: 'Hogar', url: 'https://www.vinted.es/catalog/3474-small-kitchen-appliances' },
              { name: 'Electrónica', url: 'https://www.vinted.es/?tab=electronics' },
              { name: 'Entretenimiento', url: 'https://www.vinted.es/catalog/2312-books' },
              { name: 'Hobbies y coleccionismo', url: 'https://www.vinted.es/catalog/2312-books' },
              { name: 'Deportes', url: 'https://www.vinted.es/catalog/4333-cycling' },
            ].map((cat) => (
              <a key={cat.name} href={cat.url} className="hover:bg-[#e8eded] transition-colors" style={{ textDecoration: 'none', color: '#6b7280', fontSize: 14, fontWeight: 400, padding: '6px 12px', borderRadius: 4 }}>
                {cat.name}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <ImageSearchModal 
        isOpen={showImageSearch} 
        onClose={() => setShowImageSearch(false)} 
      />
    </>
  );
};

export default VintedHeader;
