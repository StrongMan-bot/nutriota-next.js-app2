import React from 'react';

interface ImportantBoxProps {
  children: React.ReactNode;
  variant?: 'info' | 'warning' | 'success' | 'tip' | 'highlight';
  title?: string;
  className?: string;
}

const ImportantBox: React.FC<ImportantBoxProps> = ({ 
  children, 
  variant = 'info', 
  title,
  className = '' 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'warning':
        return {
          container: 'bg-gradient-to-br from-amber-50 to-yellow-100 border-2 border-amber-300',
          icon: '⚠️',
          titleColor: 'text-amber-800',
          iconBg: 'bg-white border-amber-300'
        };
      case 'success':
        return {
          container: 'bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-300',
          icon: '✅',
          titleColor: 'text-green-800',
          iconBg: 'bg-white border-green-300'
        };
      case 'tip':
        return {
          container: 'bg-gradient-to-br from-blue-50 to-sky-100 border-2 border-blue-300',
          icon: '💡',
          titleColor: 'text-blue-800',
          iconBg: 'bg-white border-blue-300'
        };
      case 'highlight':
        return {
          container: 'bg-gradient-to-br from-purple-50 to-violet-100 border-2 border-purple-300',
          icon: '⭐',
          titleColor: 'text-purple-800',
          iconBg: 'bg-white border-purple-300'
        };
      default: // info
        return {
          container: 'bg-gradient-to-br from-cyan-50 to-blue-100 border-2 border-cyan-300',
          icon: 'ℹ️',
          titleColor: 'text-cyan-800',
          iconBg: 'bg-white border-cyan-300'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={`relative rounded-xl p-6 my-6 shadow-lg ${styles.container} ${className}`}>
      {/* Icon */}
      <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full ${styles.iconBg} border-2 flex items-center justify-center text-lg shadow-md`}>
        {styles.icon}
      </div>
      
      {/* Content */}
      <div className="pt-2">
        {title && (
          <h4 className={`text-lg font-bold mb-3 ${styles.titleColor}`}>
            {title}
          </h4>
        )}
        <div className="text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ImportantBox;
