import React, { useState } from 'react';
import './Sidebar.css';
import { Home, Users, Briefcase, Clipboard, Package, Calendar, AlertTriangle, Archive } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [showCadastro, setShowCadastro] = useState(false);
  const [showMateriais, setShowMateriais] = useState(false);
  const [showAtividades, setShowAtividades] = useState(false);
  const [showOcorrencias, setShowOcorrencias] = useState(false);

  const toggleCadastro = () => setShowCadastro(!showCadastro);
  const toggleMateriais = () => setShowMateriais(!showMateriais);
  const toggleAtividades = () => setShowAtividades(!showAtividades);
  const toggleOcorrencias = () => setShowOcorrencias(!showOcorrencias);

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="logo-container">
        <img src="/image/logo.png" alt="Logo" className="logo" />
        <span className="logo-text">Arpol Quality Care</span>
      </div>
      <div className="sidebar-content">
        <ul>
          <li onClick={() => window.location.href = '/home'}>
            <Home size={20} /> Home
          </li>
          <li onClick={toggleCadastro}>
            <Users size={20} /> Cadastro
            {showCadastro && (
              <ul>
                <li onClick={() => window.location.href = '/cadastro/usuarios'}>
                  <Users size={16} /> Usuários
                </li>
                <li onClick={() => window.location.href = '/cadastro/empresas'}>
                  <Briefcase size={16} /> Empresas
                </li>
                <li onClick={() => window.location.href = '/cadastro/unidades'}>
                  <Archive size={16} /> Unidades de Manutenção
                </li>
                <li onClick={() => window.location.href = '/cadastro/area'}>
                  <Clipboard size={16} /> Área
                </li>
                <li onClick={() => window.location.href = '/cadastro/sistema'}>
                  <Clipboard size={16} /> Sistema
                </li>
                <li onClick={() => window.location.href = '/cadastro/equipamentos'}>
                  <Package size={16} /> Equipamentos
                </li>
                <li onClick={() => window.location.href = '/cadastro/centro-custos'}>
                  <Clipboard size={16} /> Centro de Custos
                </li>
                <li onClick={() => window.location.href = '/cadastro/fornecedores'}>
                  <Briefcase size={16} /> Meus Fornecedores
                </li>
              </ul>
            )}
          </li>
          <li onClick={toggleMateriais}>
            <Package size={20} /> Materiais
            {showMateriais && (
              <ul>
                <li onClick={() => window.location.href = '/materiais/cadastro'}>
                  <Clipboard size={16} /> Cadastro de Materiais
                </li>
                <li onClick={() => window.location.href = '/materiais/solicitacao'}>
                  <Clipboard size={16} /> Solicitação de Materiais
                </li>
                <li onClick={() => window.location.href = '/materiais/movimentacao'}>
                  <Clipboard size={16} /> Movimentação
                </li>
                <li onClick={() => window.location.href = '/materiais/almoxarifado'}>
                  <Package size={16} /> Almoxarifado
                </li>
              </ul>
            )}
          </li>
          <li onClick={toggleAtividades}>
            <Calendar size={20} /> Atividades
            {showAtividades && (
              <ul>
                <li onClick={() => window.location.href = '/atividades/plano'}>
                  <Calendar size={16} /> Plano de Atividades
                </li>
                <li onClick={() => window.location.href = '/atividades/agendadas'}>
                  <Calendar size={16} /> Atividades Agendadas
                </li>
                <li onClick={() => window.location.href = '/atividades/aplicacao'}>
                  <Clipboard size={16} /> Atividades por Aplicação
                </li>
                <li onClick={() => window.location.href = '/atividades/planos'}>
                  <Calendar size={16} /> Aplicações por Planos
                </li>
                <li onClick={() => window.location.href = '/atividades/agenda'}>
                  <Calendar size={16} /> Agenda
                </li>
              </ul>
            )}
          </li>
          <li onClick={toggleOcorrencias}>
            <AlertTriangle size={20} /> Ocorrências
            {showOcorrencias && (
              <ul>
                <li onClick={() => window.location.href = '/ocorrencias/painel'}>
                  <AlertTriangle size={16} /> Painel
                </li>
                <li onClick={() => window.location.href = '/ocorrencias/lista'}>
                  <AlertTriangle size={16} /> Lista de Ocorrências
                </li>
                <li onClick={() => window.location.href = '/ocorrencias/tipicas'}>
                  <AlertTriangle size={16} /> Ocorrências Típicas
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;