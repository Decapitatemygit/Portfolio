import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-bg text-white p-10 z-[9999]">
          <div className="glass-panel p-8 max-w-2xl">
            <h2 className="font-display text-2xl text-accent mb-4 uppercase tracking-widest">System Failure</h2>
            <p className="font-mono text-xs opacity-60 mb-4">
              [Error]: {this.state.error?.message || 'Unknown runtime exception'}
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-accent text-bg font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors"
            >
              Reboot System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
