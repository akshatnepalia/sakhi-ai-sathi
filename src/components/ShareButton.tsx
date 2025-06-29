
import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2, MessageCircle } from 'lucide-react';
import { whatsappService } from '@/utils/whatsappService';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonProps {
  type: 'business-plan' | 'calculation' | 'scheme' | 'invite';
  data?: any;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

const ShareButton = ({ type, data, variant = 'outline', size = 'sm', className = '' }: ShareButtonProps) => {
  const { toast } = useToast();

  const handleShare = () => {
    try {
      switch (type) {
        case 'business-plan':
          whatsappService.shareBusinessPlan(data);
          break;
        case 'calculation':
          whatsappService.shareCalculation(data);
          break;
        case 'scheme':
          whatsappService.shareScheme(data);
          break;
        case 'invite':
          whatsappService.inviteFriend();
          break;
      }
      
      toast({
        title: "📱 WhatsApp Opened",
        description: "Share your business insights with friends and family!",
      });
    } catch (error) {
      toast({
        title: "❌ Share Failed",
        description: "Could not open WhatsApp. Please try again.",
        variant: "destructive"
      });
    }
  };

  const getButtonText = () => {
    switch (type) {
      case 'business-plan': return 'Share Plan';
      case 'calculation': return 'Share Result';
      case 'scheme': return 'Share Scheme';
      case 'invite': return 'Invite Friend';
      default: return 'Share';
    }
  };

  return (
    <Button
      onClick={handleShare}
      variant={variant}
      size={size}
      className={`${className} ${type === 'invite' ? 'bg-green-600 hover:bg-green-700 text-white' : ''}`}
    >
      {type === 'invite' ? (
        <MessageCircle className="w-4 h-4 mr-2" />
      ) : (
        <Share2 className="w-4 h-4 mr-2" />
      )}
      {getButtonText()}
    </Button>
  );
};

export default ShareButton;
